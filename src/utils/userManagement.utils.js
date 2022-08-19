import { Tag } from 'antd';
import { ActionItem } from '../pages/userPage/ActionItem/ActionItem';

export const headerTableUsers = [
  {
    title: 'Họ tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Gmail',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <span className='text-blue-600'>{text}</span>,
  },
  {
    title: 'Loại tài khoản',
    dataIndex: 'role',
    key: 'role',
    render: (text) => {
      if (text === 'CLIENT') {
        return <Tag color={'#87d068'}>CLIENT</Tag>;
      } else {
        return <Tag color={'#f50'}>ADMIN</Tag>;
      }
    },
  },
  {
    title: 'Thao tác',
    dataIndex: 'action',
    key: 'action',
    render: (actionObject, record) => {
      return (
        <ActionItem record={record} />
      );
    },
  },
];

/**
    {
        "skill": [
            "LoL",
            "WEB",
            "DESIGN"
        ],
        "certification": [
            "DIB",
            "PYNOW"
        ],
        "bookingJob": [
            "618c913695d99f001c0c048b",
            "618cc99795d99f001c0c0826",
            "618cc9b295d99f001c0c0835",
            "618cddd395d99f001c0c0996",
            "618f7e3e95d99f001c0c305a",
            "618fcb4295d99f001c0c35fc",
            "618fca6f95d99f001c0c35c4"
        ],
        "deleteAt": false,
        "_id": "618c8f4595d99f001c0c045f",
        "name": "admintest",
        "email": "admin@gmail.com",
        "password": "$2a$09$fiy2/bkWsoITDzgkTkI6q.jznSw4LWq5Rc5m7jPLEcE2b2kGGm3dS",
        "phone": "0934657867",
        "birthday": "1998-05-11T00:00:00.000Z",
        "gender": true,
        "role": "ADMIN",
        "__v": 7,
        "avatar": "https://fiverr.cybersoft.edu.vn/public/images/avatar/1636818683360_75f5ddc1-5391-4683-8ece-ae89ced4815e.png"
    }
    }
}
}
 */
