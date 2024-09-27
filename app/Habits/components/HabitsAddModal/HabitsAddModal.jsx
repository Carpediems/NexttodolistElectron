import {Modal} from "antd";
import {useState} from "react";

export default function HabitsAddModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return(
        <Modal
            open={isModalOpen}
            footer={null}
            closable={false}
            classNames={'Habits-add-model'}
        >
            <p>测试</p>
        </Modal>
    )
}