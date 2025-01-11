import Product from "../models/Product";
// import { IProduct } from "../types";

export const createProduct = async (data: any) => {
    try {
        return await Product.create(data);
    } catch (error:any) {
        throw new Error(error);
    }
    };
    export const getAllProducts = async () => {
        try {
            return await Product.find();
        } catch (error:any) {
            throw new Error(error);
        }
        };
        export const getLatestProducts = async () => {
            try {
                return await Product.find().sort({ createdAt: -1 }).limit(5);
            } catch (error:any) {
                throw new Error(error);
            }
            };
            export const getAllProductCategories = async () => {
                try {
                    return await Product.distinct("category");
                } catch (error:any) {
                    throw new Error(error);
                }
                }
        
        export const getProduct = async (id: string) => {
            try {
                const product = await Product.findById(id);
                if (!product) {
                    throw new Error("Product not found");
                }
                return await Product.findById(id);
            } catch (error:any) {
                throw new Error(error);
            }
        };
        export const updateProduct = async (id: string, data: any) => {
            try {
                const product = await Product.findById(id);
                if (!product) {
                    throw new Error("Product not found");
                }
                return await Product.findByIdAndUpdate(id, data, { new: true });
            }
            catch (error:any) {
                throw new Error(error);
            }
        };
        export const deleteProduct = async (id: string) => {
            try {
                const product = await Product.findById(id);
                if (!product) {
                    throw new Error("Product not found");
                }
                return await Product.findByIdAndDelete(id);
            }
            catch (error:any) {
                throw new Error(error);
            }   
        }
