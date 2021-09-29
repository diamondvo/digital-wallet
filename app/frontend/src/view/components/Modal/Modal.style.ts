import { Modal } from "antd";
import styled from "styled-components";

export const ModalContainer = styled(Modal)`
  ${({ theme }) => {
    return `
      
      .ant-modal-body {
        height: calc(100vh - 70px);
        border-radius: ${theme.border.radius.exStrong};
        border-top-right-radius: ${theme.border.radius.exStrong};
        border-top-left-radius: ${theme.border.radius.exStrong};
        padding: 0;
      }
      .ant-modal-header {
        border-top-right-radius: ${theme.border.radius.exStrong};
        border-top-left-radius: ${theme.border.radius.exStrong};
        border-bottom: 1px solid ${theme.border.color.blueE0};
        > div {
          text-align: center;
          color: ${theme.color.black900};
          font-size: ${theme.font.size.sm};
          font-weight: ${theme.font.weight.semibold};
        }
        
      }
      .ant-modal-content {
        height: 100%;
        width: 100%;
        margin: 0;
        top: 0;
        border-radius: ${theme.border.radius.exStrong};
      }
    `
  }}
`;