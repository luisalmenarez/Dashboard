'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CompanyFormProps } from './CompanyForm.types';

export const CompanyForm = (props: CompanyFormProps) => {
  const { company } = props;

  return <div>CompanyForm</div>;
};
