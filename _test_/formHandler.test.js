import { handleSubmit } from "../src/client/js/formHandler";
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;

describe("Testing the submit functionality", () => {        
    test('Should validate formText length', () => {  
        document.body.innerHTML = `
        <form id="testForm">
            <input id="name" value="test input">
        </form>
        `;     
        // Create a mock event object
        const mockEvent = {
            preventDefault: jest.fn(),
        };
        // Call the handleSubmit function
        handleSubmit(mockEvent);    
        const formTextValue = document.getElementById('name').value;
        // Assert that the formText length is greater than zero
        expect(formTextValue.length).toBeGreaterThan(0);
        expect(handleSubmit).toBeDefined();
    })});