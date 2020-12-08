/**
 *
 * DashboardView
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Resume from 'components/Resume/Loadable';
import ManagerResumeView from 'components/ManagerResumeView/Loadable';
import './styles.scss';


function DashboardView() {
  const [view,setView] = useState(['employee']);
  return (
    <>
    <div className="Root">
      <ButtonGroup color="primary" size="small" className="navBase">
        <Button variant={view == 'employee' ? 'contained' : 'outlined'} onClick={() => setView('employee')}>Employee</Button>
        <Button variant={view == 'manager' ? 'contained' : 'outlined'} onClick={() => setView('manager')}>Manager</Button>
      </ButtonGroup>
      {view == 'employee' && (
        <Resume></Resume>
      )}
      {view == 'manager' && (
        <ManagerResumeView></ManagerResumeView>
      )}
    </div>
    </>
  );
}

DashboardView.propTypes = {};

export default memo(DashboardView);
