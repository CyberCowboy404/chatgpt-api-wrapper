class ChatController {
    ask(a: any, b: any) {
        console.log(a, b);
        return { a, b };
    }
}

export default new ChatController();