import React from "react";
export default function Nav() {
  return (
    <nav className="md:flex justify-center text-lg w-1/3 hidden">
      <a className="p-2 m-2 hover:text-slate-500 font-serif" href="/#first">Trang chủ</a>
      <a className="p-2 m-2 hover:text-slate-500 font-serif" href="/#courses">Kiểm tra</a>
      <a className="p-2 m-2 hover:text-slate-500 font-serif" href="/#contact">Hỏi đáp</a>
      <a className="p-2 m-2 hover:text-slate-500 font-serif" href="/#contact">Liên hệ</a>
    </nav>
  );
}
