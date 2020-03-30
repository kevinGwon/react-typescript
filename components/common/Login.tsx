import React, { useCallback, useEffect, useMemo } from 'react';
import Logo from '../svg/Logo';
import ReactDOM from 'react-dom';

// Components
import DimLayer from './DimLayer';
import Input from './Input';
import Loading from './Loading';

// Styled
import { StyledForm, StyledFormLogo } from './Login.style';
import { StyledBtn } from './Btn.style';

function Login({ runSubmit }: { runSubmit: (e: React.FormEvent) => void }) {
  return (
    <DimLayer>
      <StyledForm>
        <StyledFormLogo>
          <Logo />
        </StyledFormLogo>
        <form
          onSubmit={e => {
            runSubmit(e);
          }}
        >
          <Input id="id" type="text" block defaultValue="godyel7" />
          <Input id="password" type="password" defaultValue="kevingwon" block />
          <StyledBtn submit invert block>
            로그인
          </StyledBtn>
        </form>
      </StyledForm>
    </DimLayer>
  );
}

export default Login;
