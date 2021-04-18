
export { Channel, Message }

type Channel = {
    id: number;
    name: string;
}
type Message = {
    id: number;
    title: string;
    content: string;
    channelId: number;
    createdAt: Date;
}