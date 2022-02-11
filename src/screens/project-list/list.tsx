import React from "react"
import {User} from "screens/project-list/search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  title: string;
  organization: string;
}

interface ListProps {
  list: Project[],
  users: User[]
}

export const List = ({list, users}: ListProps)=>{
  //函数体
    return <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(project => <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
          </tr> )
        }
      </tbody>
    </table>
}