import {Router} from 'express';
import { createUserController, getAllUsersController, getUserController, updateUserController, deleteUserController } from '../controller/User';
const app = Router();

app.post('/', createUserController);
app.get('/', getAllUsersController);
// app.get('/:id', getUserController);
// app.put('/:id', updateUserController);
app.route('/:id').get(getUserController).put(updateUserController).delete(deleteUserController);

export default app;