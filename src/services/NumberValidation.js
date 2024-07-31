 
// export function validatePakistaniPhoneNumber(number) {
//   const regex = /^03\d{9}$/;

//   if (!regex.test(number)) {
//     if (!number.startsWith("03")) {
//       return "Number must start with 03.";
//     }
//     if (number.startsWith("00")) {
//       return "Number should not start with 00.";
//     }
//     if (/[^0-9]/.test(number)) {
//       return "Number should not contain alphabets or special characters.";
//     }
//     if (number.length !== 11) {
//       return "Number length must be 11 digits.";
//     }
  
//     return "Invalid number.";
//   }

//   return "";
// }


export function validatePakistaniPhoneNumber(number) {
  const regex = /^03\d{9}$/;

  if (!regex.test(number)) {
    if (!number.startsWith("03")) {
      return "*Number must start with 03.";
    }
    if (number.startsWith("00")) {
      return "*Number should not start with 00.";
    }
    if (/[^0-9]/.test(number)) {
      return "*Number should not contain alphabets or special characters.";
    }
    if (number.length !== 11) {
      return "*Number length must be 11 digits.";
    }

    return "*Invalid number.";
  }

  return "";
}

export function validateName(name) {
  if (name.trim() === "") {
    return "*Name is required.";
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "*Name should only contain alphabets and spaces.";
  }
  if (name.trim().length < 3) {
    return "*Name length must be at least 3 characters.";
  }
  if (name.trim().length > 64) {
    return "*Name length must not exceed 64 characters.";
  }
  return "";
}

export function validateUniqueId(uniqueId) {
  if (uniqueId.trim() === "") {
    return "*Unique ID is required.";
  }
  if (!/^\d{8}$/.test(uniqueId)) {
    return "*Unique ID must be exactly 8 characters.";
  }
  return "";
}

export function validateCity(city) {
  if (!city) {
    return "*City selection is required.";
  }
  return "";
}

export function validateTerms(terms) {
  if (!terms) {
    return "*You must agree to the terms and conditions.";
  }
  return "";
}
export function validatePrivacy(privacy) {
  if (!privacy) {
    return "";
  }
  return "";
}

export function nicValidate(nic) {
  nic = nic.trim();
  
  if (nic === "") {
    return "*NIC is required.";
  }

  if (!/^\d+$/.test(nic)) {
    return "*NIC should only contain numbers.";
  }

  if (nic.length !== 13) {
    return "*NIC should be exactly 13 digits long.";
  }

  return "";
}


export function validJazzCashNumber(number) {
  const regex = /^03\d{9}$/;

  if (!regex.test(number)) {
    if (!number.startsWith("03")) {
      return "*Number must start with 03.";
    }
    if (number.startsWith("00")) {
      return "*Number should not start with 00.";
    }
    if (/[^0-9]/.test(number)) {
      return "*Number should not contain alphabets or special characters.";
    }
    if (number.length !== 11) {
      return "*Number length must be 11 digits.";
    }
  }

  return "";
}
