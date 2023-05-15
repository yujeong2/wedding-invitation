import styled from 'styled-components';

const StyledInvitation = styled.div`
  background: #f8f3ea;
  height: 100vh;
  font-family: 'Pretendard Variable';

  .content {
    background: #fff;
    max-width: 550px;
    margin: 0 auto;

    .main {
      position: relative;

      img {
        width: 100%;
      }

      .img-decoration {
        position: absolute;
        padding: 20px;
        width: calc(100% - 40px);
        height: 694px;
        border: 1px solid #8e75b8;
        color: #8e75b8;
        top: 0;
        margin: 20px;

        letter-spacing: 15px;
        font-size: 20px;
        text-align: center;
        box-sizing: border-box;
      }

      .info-area {
        padding: 20px;

        .name {
          padding-bottom: 5px;
          margin-bottom: 20px;
          border-bottom: 2px solid #000;
          > div {
            font-size: 32px;
            font-weight: 600;
          }
        }

        .info {
          font-size: 20px;

          div + div {
            margin-top: 5px;
          }
        }
      }
    }
  }
`;

export default StyledInvitation;
