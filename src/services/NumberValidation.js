 
export function validatePakistaniPhoneNumber(number) {
  const regex = /^03\d{9}$/;

  if (!regex.test(number)) {
    if (!number.startsWith("03")) {
      return "Number must start with 03.";
    }
    if (number.startsWith("00")) {
      return "Number should not start with 00.";
    }
    if (/[^0-9]/.test(number)) {
      return "Number should not contain alphabets or special characters.";
    }
    if (number.length !== 11) {
      return "Number length must be 11 digits.";
    }
  
    return "Invalid number.";
  }

  return "";
}