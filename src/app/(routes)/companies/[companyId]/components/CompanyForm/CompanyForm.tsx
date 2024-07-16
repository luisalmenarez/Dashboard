'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  toast,
} from '@/components/ui';
import { UploadButton } from '@/utils/uploadthing';
import { CompanyFormProps } from './CompanyForm.types';
import { formSchema } from './CompanyForm.form';
import { error } from 'console';

export const CompanyForm = (props: CompanyFormProps) => {
  const { company } = props;
  const router = useRouter();
  const [photoUploaded, setPhotoUploaded] = useState(false);

  const { name, description, country, website, phone, cif, profileImage } =
    company;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      description,
      country,
      website,
      phone,
      cif,
      profileImage,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/company/${company.id}`, values);
      toast({
        title: 'Company Updated',
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company name..." type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="colombia">Colombia</SelectItem>
                    <SelectItem value="venenuela">Venezuela</SelectItem>
                    <SelectItem value="peru">Perú</SelectItem>
                    <SelectItem value="argentina">Chile</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    placeholder="www.luisalmenarez.com"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="300 0000 000" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cif"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CIF / NIF </FormLabel>
                <FormControl>
                  <Input placeholder="B-1234567" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Image </FormLabel>
                <FormControl>
                  <div>
                    {photoUploaded ? (
                      <p className="text-sm">Image Uploaded!</p>
                    ) : (
                      <UploadButton
                        className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-3"
                        {...field}
                        endpoint="profileImage"
                        onClientUploadComplete={(res) => {
                          form.setValue('profileImage', res?.[0].url);
                          setPhotoUploaded(true);
                        }}
                        onUploadError={(error: Error) => {
                          toast({ title: 'Error uploading photo' });
                        }}
                      />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companuy Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Description..."
                    {...field}
                    value={form.getValues().description ?? ''}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Edit Company</Button>
      </form>
    </Form>
  );
};
