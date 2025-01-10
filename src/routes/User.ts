import {Router} from 'express';
import { createUserController, getAllUsersController, getUserController, updateUserController, deleteUserController } from '../controller/User';
const app = Router();

app.post('/', createUserController);
app.get('/', getAllUsersController);
app.get('/:id', getUserController);
app.put('/:id', updateUserController);
app.delete('/:id', deleteUserController);

export default app;