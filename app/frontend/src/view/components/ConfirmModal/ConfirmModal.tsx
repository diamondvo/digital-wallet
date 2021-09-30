import React from 'react';
import { PrimaryParagraph } from 'src/view/components/Common/Common.style';
import { ModalContainer, CommonHeading3, OkButton } from 'src/view/components/ConfirmModal/ConfirmModal.style';

const ConfirmModal: React.FC<{ visible: boolean, setVisible: (isVisible: boolean) => void, currency: string }>
  = ({ visible, setVisible, currency }) => {
    return <ModalContainer
      visible={visible}
      centered
      closable={false}
      footer={null}
      afterClose={() => setVisible(false)}
      className="ant-confirm-modal"
    >
      <CommonHeading3 paddingBottom={24} fontSize={20} fontWeight='bold' textAlign='center'>Successfully sent</CommonHeading3>
      <PrimaryParagraph paddingTop={24}>
        Your <b>{currency}</b> has been sent!
      </PrimaryParagraph>
      <PrimaryParagraph paddingBottom={24}>
        Thank you for using our service
      </PrimaryParagraph>
      <OkButton height={40} onClick={() => setVisible(false)} color="">OK</OkButton>
    </ModalContainer>
  }

export default ConfirmModal;