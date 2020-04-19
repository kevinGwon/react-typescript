import React, { useCallback, useEffect, useMemo } from 'react';
import IconLogo from '../svg/IconLogo';
import ReactDOM from 'react-dom';

// Components
import DimLayer from './DimLayer';
import Input from './Input';
import Loading from './Loading';

// Styled
import { StyledForm, StyledFormLogo, StyledInputError } from './Login.style';
import { StyledBtn } from './Btn.style';

function Login({
  error,
  runSubmit,
}: {
  error: any;
  runSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <DimLayer z={110}>
      <StyledForm>
        <StyledFormLogo>
          <IconLogo />
        </StyledFormLogo>
        <form
          onSubmit={e => {
            runSubmit(e);
          }}
        >
          <Input id="id" type="text" block defaultValue="godyel7" />
          <Input id="password" type="password" defaultValue="kevingwon" block />
          {error && (
            <StyledInputError>
              아이디와 비밀번호가 일치하지 않습니다.
            </StyledInputError>
          )}
          <StyledBtn submit invert block>
            로그인
          </StyledBtn>
        </form>
      </StyledForm>
    </DimLayer>
  );
}

export default Login;
