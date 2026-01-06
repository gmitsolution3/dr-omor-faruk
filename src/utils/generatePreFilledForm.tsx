interface IFormData {
  name: string;
  phoneNumber: string;
  location: string;
  address: string;
}

export function getPreFilledForm(data: IFormData) {
  const nameId = "entry.452179077";
  const phoneId = "entry.130213584";
  const locationId = "entry.1485871754";
  const addressId = "entry.1950707921";

  const baseUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdQmouYHueyNU_W4lznstYEk8mFINSZ3Nzrt7JHyRR-GyWedg/viewform?usp=pp_url";

  const finalUrl = `${baseUrl}&${nameId}=${encodeURIComponent(
    data.name
  )}&${phoneId}=${encodeURIComponent(
    data.phoneNumber
  )}&${locationId}=${encodeURIComponent(
    data.location
  )}&${addressId}=${encodeURIComponent(data.address)}`;

  return finalUrl;
}
