import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const paths = {
  updateStaff: '/update',
  deleteStaff: '/delete',
  queryStaffById: '/queryById',
  queryAllStaffs: '/queryAllJson',
};

const urls = Object.fromEntries(
  Object.entries(paths).map(([key, value]) => [key, baseUrl + value])
);

function convertHobbiesToString(hobbies) {
  return hobbies.toString();
}

function convertHobbiesToArray(hobbies) {
  return hobbies.split(',');
}

async function queryAllStaffs() {
  let tmpResponse = null;

  await axios.get(urls.queryAllStaffs).then(response => {
    tmpResponse = response;
  });

  return tmpResponse.data.result.slice();
}

async function deleteStaff(staffId) {
  await axios.get(urls.deleteStaff, { params: { id: staffId } });
}

async function queryStaffById(staffId) {
  let tmpResponse = null;

  await axios
    .get(urls.queryStaffById, { params: { id: staffId } })
    .then(response => {
      tmpResponse = response;
    });

  let target = tmpResponse.data.result;
  console.log(target);
  target.hobbies = convertHobbiesToArray(target.hobbies);

  return target;
}

async function updateStaff(staff) {
  staff.hobbies = convertHobbiesToString(staff.hobbies);

  await axios.post(urls.updateStaff, JSON.stringify(staff)).then(response => {
    console.log(response);
  });
}

export { queryAllStaffs, deleteStaff, queryStaffById, updateStaff };
