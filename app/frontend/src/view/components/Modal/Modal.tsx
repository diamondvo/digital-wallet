import React from 'react';
import { Asset } from 'shared';
import closeIcon from 'src/images/close.svg';
import { ImageStyle } from 'src/view/pages/Sending/Sending.style';
import { MainAsset } from '../Asset/Asset';
import { ModalContainer } from './Modal.style';

const ModalComponent: React.FC<{ visible: boolean, setVisible: (isVisible: boolean) => void, assets: Array<Asset>, onSelect: (asset: Asset) => void }>
= ({ visible, setVisible, assets, onSelect }) => {
  return <ModalContainer
    visible={visible}
    title="Assets"
    centered
    footer={null}
    closeIcon={<ImageStyle src={closeIcon} alt="Click to close asset modal" width={20} height={20} />}
    onCancel={() => setVisible(false)}
    afterClose={() => setVisible(false)}
    className="ant-modal-container"
  >
    <MainAsset assets={assets} isControl={false} onSelect={(asset) => onSelect(asset)}/>
  </ModalContainer>
}

export default ModalComponent;