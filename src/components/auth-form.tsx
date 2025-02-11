"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    DefaultValues,
    FieldValues,
    SubmitHandler,
    useForm,
    UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";

import { Button } from "@/src/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";

export type Field = {
    name: string;
    type: string;
    label: string;
    placeholder: string;
    required: boolean;
    description?: string;
};

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: DefaultValues<T>;
    onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
    fields: Field[];
    title: string;
    description: string;
    submitText: string;
}

const AuthForm = <T extends FieldValues>({
                                                    schema,
                                                    defaultValues,
                                                    onSubmit,
                                                    fields,
                                                    title,
                                                    description,
                                                    submitText,
                                                }: Props<T>) => {
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const handleSubmit: SubmitHandler<T> = async (values: T) => {
        await onSubmit(values);
    };

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="text-light-100">{description}</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-6">
                    {fields.map((field) => (
                        <FormField
                            key={field.name}
                            name={field.name}
                            render={({ field: formField }) => (
                                <FormItem>
                                    <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            id={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            {...formField}
                                        />
                                    </FormControl>
                                    {field.description && (
                                        <FormDescription>{field.description}</FormDescription>
                                    )}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button type="submit" className="form-btn">
                        {submitText}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default AuthForm;
