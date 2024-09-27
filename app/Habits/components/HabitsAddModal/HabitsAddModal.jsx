import {Button, ConfigProvider, Form, Input, Modal, Select} from "antd";
import {useEffect, useState} from "react";
import './HabitsAddModal.scss'
import {createFromIconfontCN} from "@ant-design/icons";


const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4588666_fmaltepwbso.js', // 在 iconfont.cn 上生成
});
export default function HabitsAddModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsModalOpen(true)
    }, []);

    return(
        <Modal
            open={isModalOpen}
            footer={null}
            closable={false}
            wrapClassName={'Habits-add-model'}
            centered={true}
            mask={false}
        >
            <h3>添加习惯</h3>
            <div className="Habits-add-model-content">
                <ConfigProvider theme={{
                    components:{
                        Form:{
                            labelFontSize:12,
                            itemMarginBottom:12,
                            labelColor:"#191919"

                        }
                    }

                }}>
                    <Form
                        name="basic"
                        labelCol={{ span: 4,offset:0 }}
                        wrapperCol={{ span: 24 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        labelAlign="left"
                        className="Habits-add-model-Form"
                        colon={false}
                    >
                        <Form.Item
                            label={<Button className="Habits-add-model-Form-icon"><MyIcon type="icon-backpack" /></Button>}
                            name="username"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="频率"
                            name="frequency"
                        >
                            <Select
                                defaultValue="lucy"
                                style={{ width: 320 }}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: 'lucy', label: 'Lucy' },
                                    { value: 'Yiminghe', label: 'yiminghe' },
                                    { value: 'disabled', label: 'Disabled', disabled: true },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            label="目标"
                            name="Target"
                        >
                            <Select
                                defaultValue="lucy"
                                style={{ width: 320 }}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: 'lucy', label: 'Lucy' },
                                    { value: 'Yiminghe', label: 'yiminghe' },
                                    { value: 'disabled', label: 'Disabled', disabled: true },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            label="开始日期"
                            name="StartDate"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="坚持天数"
                            name="PersistenceDays"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="所属分组"
                            name="Group"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="提醒"
                            name="remind"
                        >
                            <Input />
                        </Form.Item>



                    </Form>
                </ConfigProvider>

            </div>
        </Modal>
    )
}