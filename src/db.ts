import { connect, Mongoose } from 'mongoose';
export let connection: Mongoose;
export default () => {
    return connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );
};
