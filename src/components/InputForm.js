export default function InputForm({ ...rest }) {
  return (
    <div className=" mb-5">
      <input
        className="w-full py-2 px-2 border border-indigo-100 focus:border-indigo-300  rounded"
        {...rest}
      />
    </div>
  );
}
