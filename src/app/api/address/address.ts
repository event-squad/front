import { Address, CEP } from "@/app/types/cep";
import backendUrl from "../backend";

const path = "/api/address";

async function getAddress(token: string): Promise<Address> {
  const response = await fetch(`${backendUrl}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  return await response.json();
}

async function createAddress(token: string, cep: CEP) {
  const response =  await fetch(`${backendUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(cep),
  });

  return response;
}

async function updateAddress(token: string, cep: CEP) {
  const response = await fetch(`${backendUrl}${path}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(cep),
  });

  return response;
}

const Address = {
  getAddress,
  createAddress,
  updateAddress,
};

export default Address;
