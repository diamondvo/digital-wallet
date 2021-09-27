import styled from 'styled-components';
export const StyledLayoutContainer = styled.div`
  margin: 0 auto;
  line-height: 1.5rem;
  font-size: 16px;
  max-width: ${({ theme }) => theme.grid.container.maxWidth};
`;

// TODO: Move the common components
export const StyledContentContainer = styled.div`
  padding-left: ${({ theme }) => theme.spaces.md};
  padding-right: ${({ theme }) => theme.spaces.md};
`;