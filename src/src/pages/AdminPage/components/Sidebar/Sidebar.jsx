import "./Sidebar.css";

function Sidebar() {
  const menus = [
    {
      title: "운영관리",
      items: ["사용자관리", "승인요청관리", "제품 관리", "공지사항관리"],
    },
    {
      title: "시스템관리",
      items: ["코드관리", "정책관리", "배치관리", "템플릿관리"],
    },
    {
      title: "메뉴관리",
      items: ["메뉴목록관리", "역할권한관리"],
    },
    {
      title: "이력관리",
      items: ["파일다운로드 이력", "마스킹해제 이력", "메뉴접근 이력", "로그인 이력"],
    },
  ];

  return (
    <aside className="admin-sidebar">
      {menus.map((section, i) => (
        <div key={i} className="sidebar-section">
          <h4>{section.title}</h4>
          <ul>
            {section.items.map((item, j) => (
              <li
                key={j}
                className={item === "제품 관리" ? "active" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
