import { checkForName } from "../src/client/js/nameChecker";

describe('checkForName', () => {
    test('should validate names array length', () => {
      // Call the checkForName function
      checkForName('inputText');
      // Get the names array
      const namesArray = [
        'Picard',
        'Janeway',
        'Kirk',
        'Archer',
        'Georgiou',
        'Aneesh',
      ];
  
      // Confirm that the names array length is greater than zero
      expect(namesArray.length).toBeGreaterThan(0);
    });
  });