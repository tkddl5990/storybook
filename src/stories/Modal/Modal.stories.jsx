import React, {useCallback} from "react";
import Modal from '@components/Modal'
import Button from "@components/Button";

export default {
    title: "Example/Modals/Modal",
    components: Modal,
    argTypes: {
        title : {
            type: "string"
        },
        show : {
            type: "boolean"
        }
    },
};


const Template = (args) => {
    return (
        <Modal show={args.show}>
            <Modal.Header hasCloseButton>
                <Modal.Title>{args.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis eos ex facere iste, reiciendis? Ad autem consequuntur eaque, ex exercitationem maiores modi nam quidem quis quod repellendus sunt, veritatis.
            </Modal.Body>
            <Modal.Footer>
                <Button>취소</Button>
                <Button>확인</Button>
            </Modal.Footer>
        </Modal>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    title: '모달 제목',
    show: true
}

