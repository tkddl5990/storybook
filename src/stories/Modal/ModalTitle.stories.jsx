import React, {useCallback} from "react";
import Modal from '@components/Modal'

export default {
    title: "Example/Modals/ModalTitle",
    components: Modal.Title,
    argTypes: {
        as: 'string',
        children : {
            type: "string"
        },
    },
};


const Template = (args) => {
    return (
        <Modal show={true}>
            <Modal.Header hasCloseButton>
                <Modal.Title as={args.as}>{args.children}</Modal.Title>
            </Modal.Header>
        </Modal>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    as: 'h4',
    children: '모달 제목',
}

