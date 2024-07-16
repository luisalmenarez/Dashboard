import Image from 'next/image';
import { CompanyInformationProps } from './CompanyInformation.types';
import { User } from 'lucide-react';
import { CompanyForm } from '../CompanyForm';
import { NewContact } from '../NewContact';

export const CompanyInformation = (props: CompanyInformationProps) => {
  const { company } = props;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-4">
      <article className="rounded-lg bg-background shadow-md hover:shadow-xl p-4 transition-all duration-500">
        <div className="">
          <Image
            src={company.profileImage}
            alt={`Logo company ${company.name}`}
            width={50}
            height={50}
            className="rounded-lg"
          />

          <CompanyForm company={company} />
        </div>
      </article>
      <article className="rounded-lg bg-background shadow-md hover:shadow-xl p-4 h-min transition-all duration-500">
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-2">
            <User className="size-5" />
            Contacts
          </div>
          <div>
            <NewContact />
          </div>
        </div>
        <p>List contacts...</p>
      </article>
    </section>
  );
};
