// export const API_PATH = "http://localhost:3002";
// export const API_PATH = "http://142.93.217.138:3002";
export const API_PATH =
  "https://n3w9xl074i.execute-api.ap-south-1.amazonaws.com/v1";

export const token = () => {
  if (typeof window !== "undefined") {
    // Check if window is defined (client-side)
    return localStorage.getItem("token");
  }
  return null;
};
