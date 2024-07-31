import api from "../api";

export const getAllFirebaseUser = async () => {
  const endpoint = `/fetch-user-data`;
  try {
    const response = await api.get(`${endpoint}`);
    if (response.status === 401) {
      return {
        status: response.status,
        message: response.data.message,
      };
    }
    return response.data;
  } catch (error: any) {
    console.error("Error123", error);
    return {
      status: error?.response?.status || 500,
      message: error.response.data.error || error.response.statusText || error.code,
    };
  }
};

export const patchFirebaseUser = async (id: string, name: string) => {
  const payload = {
    id: id,
    name: name,
  };
  const endpoint = `/update-user-data`;
  try {
    const response = await api.patch(`${endpoint}`, payload);

    if (response.status === 401) {
      return {
        status: response.status,
        message: response.data.message,
      };
    }
    return response.data;
  } catch (error: any) {
    console.error("Error123", error.response);
    return {
      status: error?.response?.status || 500,
      message: error.code,
    };
  }
};
