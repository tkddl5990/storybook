import React, {useCallback} from "react";
import Modal from '@components/Modal'

export default {
    title: "Example/Modals/ModalBody",
    components: Modal.Body,
    argTypes: {
        children : {
            type: "string"
        },
    },
};


const Template = (args) => {
    return (
        <Modal show={true}>
            <Modal.Body>
                {args.children}
            </Modal.Body>
        </Modal>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aliquid culpa dolorum facilis, fugiat hic, iure laborum magni molestiae quae quo reprehenderit sapiente, tempore temporibus ullam velit. Eius, rerum.',
}

