interface IInput {
  id: string;
  type?: string;
  label?: string;
  placeholder?: string;
  autoCapitalize?: string;
  autoComplete?: string;
  autoCorrect?: string;
}

export default function Input(props: IInput) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{props.label ? props?.label : null}</span>
      </label>
      <input
        id={props?.id}
        type={props?.type ? props?.type : "text"}
        placeholder={props?.placeholder ? props?.placeholder : ""}
        autoCorrect="off"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}
