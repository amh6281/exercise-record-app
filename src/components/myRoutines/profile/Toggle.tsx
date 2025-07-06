interface ToggleProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

const Toggle = ({ id, checked, onCheckedChange, className = '' }: ToggleProps) => {
  return (
    <button
      id={id}
      type='button'
      role='switch'
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCheckedChange(!checked);
        }
      }}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
        checked
          ? 'bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500'
          : 'bg-cool-200 hover:bg-cool-300 dark:bg-choco-600 dark:hover:bg-choco-500'
      } ${className} `}
    >
      <span
        className={`dark:bg-choco-100 inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'} `}
      />
    </button>
  );
};

export default Toggle;
