/*
 *
 * Dashboard actions
 *
 */

import {
  DEFAULT_ACTION, PUT_TAB_VALUE,
  GET_ALL_EMPLOYEES, GET_ALL_EMPLOYEES_SUCCESS, GET_ALL_EMPLOYEES_FAILURE,

  GET_EMPLOYEE_DETAILS, GET_EMPLOYEE_DETAILS_SUCCESS, GET_EMPLOYEE_DETAILS_FAILURE,
  GET_PROBLEM_SOLVED_FOR_CUSTOMER, GET_PROBLEM_SOLVED_FOR_CUSTOMER_SUCCESS , GET_PROBLEM_SOLVED_FOR_CUSTOMER_FAILURE,
  GET_OVERALL_SUMMARY, GET_OVERALL_SUMMARY_SUCCESS, GET_OVERALL_SUMMARY_FAILURE,
  GET_QUALIFICATION_DETAILS, GET_QUALIFICATION_DETAILS_SUCCESS, GET_QUALIFICATION_DETAILS_FAILURE,
  GET_HOBBY, GET_HOBBY_SUCCESS, GET_HOBBY_FAILURE,
  GET_PROJECT, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE,
  GET_RESUME_TRACKER, GET_RESUME_TRACKER_SUCCESS, GET_RESUME_TRACKER_FAILURE,
  GET_BLOG, GET_BLOG_SUCCESS, GET_BLOG_FAILURE,

  PUT_EMPLOYEE_DETAILS, PUT_EMPLOYEE_DETAILS_SUCCESS, PUT_EMPLOYEE_DETAILS_FAILURE,
  PUT_PROBLEM_SOLVED_FOR_CUSTOMER, PUT_PROBLEM_SOLVED_FOR_CUSTOMER_SUCCESS , PUT_PROBLEM_SOLVED_FOR_CUSTOMER_FAILURE,
  PUT_OVERALL_SUMMARY, PUT_OVERALL_SUMMARY_SUCCESS, PUT_OVERALL_SUMMARY_FAILURE,
  PUT_QUALIFICATION_DETAILS, PUT_QUALIFICATION_DETAILS_SUCCESS, PUT_QUALIFICATION_DETAILS_FAILURE,
  PUT_HOBBY, PUT_HOBBY_SUCCESS, PUT_HOBBY_FAILURE,
  PUT_PROJECT, PUT_PROJECT_SUCCESS, PUT_PROJECT_FAILURE,
  PUT_RESUME_TRACKER, PUT_RESUME_TRACKER_SUCCESS, PUT_RESUME_TRACKER_FAILURE,
  PUT_BLOG, PUT_BLOG_SUCCESS, PUT_BLOG_FAILURE,

  POST_EMPLOYEE_DETAILS, POST_EMPLOYEE_DETAILS_SUCCESS, POST_EMPLOYEE_DETAILS_FAILURE,
  POST_PROBLEM_SOLVED_FOR_CUSTOMER, POST_PROBLEM_SOLVED_FOR_CUSTOMER_SUCCESS , POST_PROBLEM_SOLVED_FOR_CUSTOMER_FAILURE,
  POST_OVERALL_SUMMARY, POST_OVERALL_SUMMARY_SUCCESS, POST_OVERALL_SUMMARY_FAILURE,
  POST, POST_QUALIFICATION_DETAILS_SUCCESS, POST_QUALIFICATION_DETAILS_FAILURE,
  POST_HOBBY, POST_HOBBY_SUCCESS, POST_HOBBY_FAILURE,
  POST_PROJECT, POST_PROJECT_SUCCESS, POST_PROJECT_FAILURE,
  POST_RESUME_TRACKER, POST_RESUME_TRACKER_SUCCESS, POST_RESUME_TRACKER_FAILURE,
  POST_BLOG, POST_BLOG_SUCCESS, POST_BLOG_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function putTabValue(tabValue) {
  return {
    type: PUT_TAB_VALUE,
    tabValue,
  };
}

export function getAllEmployees() {
  return {
    type: GET_ALL_EMPLOYEES,
  };
}

export function getAllEmployeesSuccess(employeeList) {
  const employees = employeeList.sort((e1, e2) => (e1.first_name + ' ' + e1.last_name > e2.first_name + ' ' + e2.last_name) ? 1 : -1)
  return {
    type: GET_ALL_EMPLOYEES_SUCCESS,
    employees,
  };
}

export function getAllEmployeesFailure(error) {
  return {
    type: GET_ALL_EMPLOYEES_FAILURE,
    error
  };
}


//--------------------------------Employee Actions---------------------------

export function getEmployeeDetails(){
  return{
    type : GET_EMPLOYEE_DETAILS,
  };
}

export function getProblemSolvedForCustomer(){
  return{
    type : GET_PROBLEM_SOLVED_FOR_CUSTOMER,
  };
}

export function getProblemSolvedForCustomerSuccess(employeeInfo){
  return{
    type : GET_PROBLEM_SOLVED_FOR_CUSTOMER_SUCCESS,
    employeeInfo,
  };
}

export function getProblemSolvedForCustomerFailure(error){
  return{
    type : GET_PROBLEM_SOLVED_FOR_CUSTOMER_SUCCESS,
    error,
  };
}

export function getOverallSummary(){
  return{
    type : GET_OVERALL_SUMMARY,
  };
}

export function getQualificationDetails(){
  return{
    type : GET_QUALIFICATION_DETAILS,
  };
}

export function getHobby() {
  return {
    type: GET_HOBBY,
  };
}

export function getBlog() {
  return {
    type: GET_BLOG,
  };
}

export function getProject() {
  return {
    type: GET_PROJECT,
  };
}

export function getResumeTracker() {
  return {
    type: GET_RESUME_TRACKER,
  };
}