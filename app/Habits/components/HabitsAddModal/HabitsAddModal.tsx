"use client";
import React, { useEffect, useState } from "react";
import "./HabitsAddModal.scss";
import { ConfigProvider, Flex, Form, Modal } from "antd";
import { HabitsAddModalForm } from "@/app/Habits/components/HabitsAddModal/HabitsAddModalData";
import CancelAndOk from "@/app/component/CancelAndOk";

export default function HabitsAddModal(props: any) {
  /**
   *
   */
  const [isModalVisible, setModalVisible] = useState(props.isAddModel);
  const [form] = Form.useForm();
  const isAddModelTrue = () => {
    setModalVisible(false);
    props.callbackFunc(false);
    console.log(form.getFieldsValue());
  };
  useEffect(() => {
    setModalVisible(true);
  }, [props.isAddModel]);

  if (!props.isAddModel) return null;
  return (
    <Modal
      open={isModalVisible}
      footer={null}
      closable={false}
      wrapClassName={"Habits-add-model"}
      centered={true}
      mask={false}
    >
      <h3>添加习惯</h3>
      <div className="Habits-add-model-content">
        <ConfigProvider
          theme={{
            components: {
              Form: {
                labelFontSize: 12,
                itemMarginBottom: 12,
                labelColor: "#191919",
              },
            },
          }}
        >
          <Form
            name="basic"
            labelCol={{ span: 4, offset: 0 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            labelAlign="left"
            className="Habits-add-model-Form"
            colon={false}
            form={form}
          >
            {HabitsAddModalForm.map((item) => (
              <Form.Item
                key={item.HabitsAddModalFormIndex}
                label={item.HabitsAddModalFormLabel}
                name={item.HabitsAddModalFormName}
              >
                {item.HabitsAddModalFormComponent}
              </Form.Item>
            ))}
          </Form>
        </ConfigProvider>
      </div>

      <Flex className="Habits-Icon-footer" justify="flex-end" wrap gap="small">
        <button
          className="Habits-Icon-footer_determine"
          onClick={() => isAddModelTrue()}
        >
          确定
        </button>
        <button className="Habits-Icon-footer_cancel">取消</button>
      </Flex>
    </Modal>
  );
}
