// 请求响应参数（不包含data）
export interface Result {
  code: string;
  msg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  token: string;
  captchaEnabled: boolean;
  img: string;
  uuid: string;
  data: T;
}

// 分页响应参数
export interface ResPage<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
    uuid: string;
    code: string;
  }
  export interface ResLogin {
    token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
  export interface CodeImg {
    captchaEnabled: boolean;
    img: string;
    uuid: string;
  }
}

// 用户管理模块
export namespace User {
  export interface ReqUserParams extends ReqPage {
    username: string;
    gender: number;
    idCard: string;
    email: string;
    address: string;
    createTime: string[];
    status: number;
  }
  export interface ResUserList {
    createBy: string;
    createTime: string;
    updateBy: string;
    updateTime: string;
    remark: string;
    userId: number;
    deptId: number;
    userName: string;
    nickName: string;
    email: string;
    phonenumber: string;
    sex: string;
    avatar: string;
    password: string;
    status: string;
    delFlag: string;
    loginIp: string;
    loginDate: string;
    dept: {
      createBy: string | null;
      createTime: string | null;
      updateBy: string | null;
      updateTime: string | null;
      remark: string | null;
      deptId: number;
      parentId: number | null;
      ancestors: any | null;
      deptName: string;
      orderNum: number | null;
      leader: string;
      phone: string | null;
      email: string | null;
      status: string | null;
      delFlag: string | null;
      parentName: string | null;
      children: any[] | null;
    };
    roles: any[];
    postIds: number[] | null;
    roleIds: string[] | null;
    roleId: string | null;
    admin: boolean;
    children?: ResUserList[];
  }
  export interface ResStatus {
    userLabel: string;
    userValue: number;
  }
  export interface ResGender {
    genderLabel: string;
    genderValue: number;
  }
  export interface ResDepartment {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ResRole {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
}
