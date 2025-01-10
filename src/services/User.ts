import User from "../models/User";

export const createUser = async (data: any) => {
  try {
    return await User.create(data);
  } catch (error:any) {
    throw new Error(error);
  }
};

export const getAllUsers = async () => {
    try {
        return await User.find();
    } catch (error:any) {
        throw new Error(error);
    }
    };
    export const getUser = async (id: string) => {
        try {
            return await User.findById(id);
        } catch (error:any) {
            throw new Error(error);
        }
    };
    export const updateUser = async (id: string, data: any) => {
        try {
            return await User.findByIdAndUpdate(id, data, { new: true });
        }
        catch (error:any) {
            throw new Error(error);
        }
    };
    export const deleteUser = async (id: string) => {
        try {
            return await User.findByIdAndDelete(id);
        }
        catch (error:any) {
            throw new Error(error);
        }   
    }