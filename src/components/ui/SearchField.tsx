import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'

interface SearchFieldProps {
    label: string
    type: InputHTMLAttributes<HTMLInputElement>['type']
    placeholder: string
    icon: ReactNode
    value?: string
    searchedValue?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    onClear?: () => void
}

function SearchField(props: SearchFieldProps) {
    return (
        <label className="grid gap-1.5 text-sm font-bold">
            {props.label}
            <div className="relative">
                {props.icon}
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    className="w-full rounded-full border border-border bg-night py-3 pl-10 pr-4 font-sans text-ink placeholder:text-faint focus:outline-none focus:ring-2 focus:ring-accent"
                    value={props.value}
                    onChange={props.onChange}
                />
                {(props.value || props.searchedValue) && (
                    <button onClick={props.onClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-full bg-night/80 px-2.5 py-1 text-accent font-bold backdrop-blur cursor-pointer focus:outline-accent"
                        type="button"
                    >
                        ×
                    </button>)}
            </div>
        </label>
    )
}

export default SearchField
