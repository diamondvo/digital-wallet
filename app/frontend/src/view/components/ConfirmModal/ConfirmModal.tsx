import React from 'react';
import { SendButton } from 'src/view/pages/Sending/Sending.style';
import { ParagrahStyle } from '../Asset/Asset.style';
import { ModalContainer, CommonHeading3 } from './ConfirmModal.style';

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
      <ParagrahStyle paddingTop={24}>
        Your <b>{currency}</b> has been sent!
      </ParagrahStyle>
      <ParagrahStyle paddingBottom={24}>
        Thank you for using our service
      </ParagrahStyle>
      <SendButton height={40} onClick={() => setVisible(false)}>OK</SendButton>
    </ModalContainer>
  }

export default ConfirmModal;