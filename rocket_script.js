class Script {
    prepare_outgoing_request({
                                 request
                             }) {

        let tags_and_users = {
            "#l3": ':bell: @s.karataev, @i.pankratov, @v.shelgunova\n',
            "#devops": ':bell: @a.yuschenko, @akuzin, @e.lungu\n',
            "#l2": ":bell: @a.goryachih, @i.ibragimov, @i.puzanov\n"

        }

        this.incoming_text = request.data.text
        this.incoming_message_id = request.data.message_id
        this.incoming_thread_id = request.data.tmid
        let thread_id = this.incoming_thread_id ? this.incoming_thread_id : this.incoming_message_id

        var outgoing_text = ''
        for (var key in tags_and_users) {
            if (this.incoming_text.includes(key)) {
                outgoing_text += tags_and_users[key]

            }
        }
        if (outgoing_text) {
            return {
                message: {
                    text: outgoing_text,
                    tmid: thread_id
                }
            }
        }
    }
}