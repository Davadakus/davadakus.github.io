// This is your reusable component
function SectionHeader({ children }) {
  return (
    <p className='flex justify-center items-center text-[35px] mb-[30px] font-semibold border border-transparent'>
      {children}
    </p>
  );
}

export default SectionHeader;