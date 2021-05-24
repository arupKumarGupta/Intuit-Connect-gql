import { config } from 'dotenv';
// env configurations
config();
import { ApolloServer, gql } from 'apollo-server';
import { BuildingModel, MeetingModel, MeetingRoomModel } from './models';
import getConnection from './db';
interface MeetingInput {
    title: string;
    date: string;
    startTime: string;
    endTime: string;
}
const typeDefs = gql`
    type Meeting {
        id: ID!
        title: String!
        meetingRoom: MeetingRoom!
        date: String!
        startTime: String!
        endTime: String!
    }
    input MeetingInput {
        title: String!
        date: String!
        startTime: String!
        endTime: String!
    }
    type MeetingRoom {
        id: ID!
        name: String!
        floor: Int!
        building: Building!
        meetings: [Meeting!]!
    }
    type Building {
        id: ID!
        name: String!
        meetingRooms: [MeetingRoom!]!
    }
    type Query {
        Buildings: [Building!]!
        MeetingRooms: [MeetingRoom!]!
        Meetings: [Meeting!]!
        Building(id: ID!): Building!
        MeetingRoom(id: ID!): MeetingRoom!
        Meeting(id: ID!): Meeting!
    }

    type Mutation {
        Building(name: String!): Building!
        MeetingRoom(name: String!, floor: Int!, buildingId: ID!): MeetingRoom!
        Meeting(meetingInput: MeetingInput, meetingRoomId: ID!): Meeting!
    }
`;

const resolvers: any = {
    Query: {
        Buildings: async () => await BuildingModel.find(),
        Building: async (_: any, { id }: { id: string }) =>
            await BuildingModel.findById(id),
        MeetingRooms: async () => await MeetingRoomModel.find(),
        MeetingRoom: async (_: any, { id }: { id: string }) =>
            await MeetingRoomModel.findById(id),
        Meetings: async () => await MeetingModel.find(),
        Meeting: async (_: any, { id }: { id: string }) =>
            await MeetingModel.findById(id),
    },
    Mutation: {
        Building: async (_: any, { name }: { name: string }) => {
            const building = new BuildingModel({ name });
            return await building.save();
        },

        MeetingRoom: async (
            _: any,
            {
                name,
                floor,
                buildingId,
            }: {
                name: string;
                floor: number;
                buildingId: string;
            }
        ) => {
            const room = new MeetingRoomModel({
                name,
                floor,
                building: buildingId,
            });
            return await room.save();
        },

        Meeting: async (
            _: any,
            {
                meetingInput,
                meetingRoomId,
            }: { meetingInput: MeetingInput; meetingRoomId: string }
        ) => {
            const meeting = new MeetingModel({
                ...meetingInput,
                meetingRoom: meetingRoomId,
            });
            return await meeting.save();
        },
    },
    Building: {
        meetingRooms: async ({ _id }: { _id: string }) => {
            return await MeetingRoomModel.find({ building: _id });
        },
    },
    MeetingRoom: {
        building: async ({ building }: { building: string }) => {
            return await BuildingModel.findById(building);
        },
        meetings: async ({ _id }: { _id: string }) =>
            await MeetingModel.find({ meetingRoom: _id }),
    },
    Meeting: {
        meetingRoom: async ({ meetingRoom }: { meetingRoom: string }) =>
            await MeetingRoomModel.findById(meetingRoom),
    },
};
getConnection()
    .then(() => {
        console.log('db connection succeeded! starting apollo!');
        const server = new ApolloServer({
            cors: {
                origin: '*',
                credentials: true,
            },
            typeDefs,
            resolvers,
            context: async ({ req }: { req: any }) => {
                return {};
            },
        });

        // The `listen` method launches a web server.
        server
            .listen({ port: process.env.PORT || 3000 })
            .then(({ url }) => {
                console.log(`🚀  Server ready at ${url}`);
            })
            .catch((err) => {
                console.error(err.message);
            });
    })
    .catch((err: any) => {
        console.error(err.message);
    });
