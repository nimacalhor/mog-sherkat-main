export async function getOtp(phoneNumber) {
  try {
    const regInfo = {
      method: "POST",
      body: JSON.stringify({ phoneNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `${process.env.API}/services/mobile/otp/get-otp`;
    const response = await fetch(url, regInfo);
    const data = await response.json();
    return { data, ok: true };
  } catch (error) {
    return { data: null, ok: false };
  }
}

export async function validateOtp(phoneNumber, otp) {
  try {
    const reqInfo = {
      method: "POST",
      body: JSON.stringify({ phoneNumber, otp }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `${process.env.API}/services/mobile/otp/validate-otp`;
    const response = await fetch(url, reqInfo);
    const data = await response.json();
    return { data, ok: true };
  } catch (error) {
    return { data: null, ok: false, error };
  }
}
