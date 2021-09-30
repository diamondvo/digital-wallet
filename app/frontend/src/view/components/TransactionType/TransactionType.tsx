import React from 'react';
import {
  ActionTypeStyle, TransactionTypeContainer,
  IconCard, ImageIcon, IconContent, ActionLabel
} from 'src/view/components/TransactionType/TransactionType.style';
import depositIcon from 'src/images/deposit.svg';
import sendIcon from 'src/images/send.svg';
import exchangeIcon from 'src/images/exchange.svg';

const TransactionType: React.FC<{ dispatchAction: (actionType: string) => void }> = ({ dispatchAction }) => {
  return <TransactionTypeContainer>
    <ActionTypeStyle>
      <IconCard>
        <IconContent>
          <ImageIcon src={depositIcon} alt="Deposit" />
        </IconContent>
        <ActionLabel>Deposit</ActionLabel>
      </IconCard>
      <IconCard middle onClick={() => dispatchAction('/send')}>
        <IconContent>
          <ImageIcon src={sendIcon} alt="Send" />
        </IconContent>
        <ActionLabel>Send</ActionLabel>
      </IconCard>
      <IconCard>
        <IconContent>
          <ImageIcon src={exchangeIcon} alt="Swap" />
        </IconContent>
        <ActionLabel>Swap</ActionLabel>
      </IconCard>
    </ActionTypeStyle>
  </TransactionTypeContainer>
}

export default TransactionType;