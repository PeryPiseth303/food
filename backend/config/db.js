import mongoose from "mongoose";

export const conncetDb = async () => {
    try {
        await mongoose.connect('mongodb://foodDelivery:foodDelivery123@ac-ll5vijt-shard-00-00.brq5tii.mongodb.net:27017,ac-ll5vijt-shard-00-01.brq5tii.mongodb.net:27017,ac-ll5vijt-shard-00-02.brq5tii.mongodb.net:27017/?ssl=true&replicaSet=atlas-swd3yu-shard-0&authSource=admin&appName=Cluster0')
            .then(() => console.log("DB Connected"))
    } catch (error) {
        console.log(error)
    }

}


