import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// project import
import { LeadsType } from '../types/leads';
import { addLeads } from '../store/reducers/leads';
import { dispatch } from '../store';
import { openSnackbar } from '../store/reducers/snackbar';

// constant
const leadsInitialValues: LeadsType = {
    name: '',
    email: '',
    phone: '',
    car: '',
    year: '',
    fipe: '',
    mileage: '',
    entry: '',
    installment: '',
    paid: '',
    times: '',
    attendant: 'Attendant 1',
};

const allAttendant = ['Attendant 1', 'Attendant 2', 'Attendant 3', 'Attendant 4'];

const InputValidStyle: string = "rounded-[50px] text-base bg-black text-white bg-opacity-30 placeholder-gray-600 px-6 py-3";
const InputErrorStyle: string = "rounded-[50px] text-base bg-black border-2 border-blue-500 text-white bg-opacity-30 placeholder-gray-600 px-6 py-3 animate-pulse";
const ErrorFieldStyle: string = "bg-blue-500 bg-opacity-30 text-white text-xs font-semibold text-center rounded-xl p-1"

const Register = () => {
    const handleAddLeads = async (values: LeadsType) => {
        const addLeadsResult = await dispatch(addLeads(values));
        console.log('addLeadsResult', addLeadsResult.payload[0]);
        dispatch(
            openSnackbar({
                open: true,
                message: addLeadsResult.payload[0].message,
                variant: 'alert',
                alert: {
                    color: addLeadsResult.payload[0].color,
                },
                close: false,
                transition: 'SlideLeft'
            })
        );
    }

    const LeadsSchema = Yup.object().shape({
        name: Yup.string().max(100, 'Must be 100 characters or less').required('Nome is required'),
        email: Yup.string().required('Email is required').email('Must be a valid E-mail'),
        phone: Yup.string().max(15).required('Whatsapp is required'),
        car: Yup.string().max(100, 'Must be 100 characters or less').required('Carro is required'),
        year: Yup.number().required('Ano is required').typeError('Invalid Ano number'),
        fipe: Yup.string().max(100).required('Fipe is required'),
        mileage: Yup.number().required('Kilometragem is required').typeError('Invalid Kilometragem number'),
        entry: Yup.number().required('Entrada is required').typeError('Invalid Entrada number'),
        installment: Yup.number().required('Valor da Parcela is required').typeError('Invalid Valor da Parcela number'),
        paid: Yup.number().required('Quantidade Paga is required').typeError('Invalid Quantidade Paga number'),
        times: Yup.number().required('Quantas Vezes times is required').typeError('Invalid Quantas Vezes number'),
        attendant: Yup.string().required('Attendant is required'),
    });

    return (
        <Formik
            initialValues={leadsInitialValues}
            validationSchema={LeadsSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Formik Values', values);
                try {
                    handleAddLeads(values);
                    setSubmitting(false);
                } catch (error) {
                    console.log('error', error);
                }
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className='flex flex-col gap-3 px-16 py-10'>
                        <div className='flex items-center justify-center h-36 text-white font-semibold text-3xl'>Cadastro de Lead</div>
                        <div className='flex flex-wrap gap-3'>
                            <ErrorMessage name='name' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='email' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='phone' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='car' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='year' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='fipe' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='mileage' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='entry' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='installment' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='paid' className={ErrorFieldStyle} component='div' />
                            <ErrorMessage name='times' className={ErrorFieldStyle} component='div' />
                        </div>
                        <div className='grid grid-flow-col justify-stretch gap-8 mb-12'>
                            <Field className={errors.name && touched.name ? InputErrorStyle : InputValidStyle} id="name" name="name" placeholder="Nome" />
                            <Field className={errors.email && touched.email ? InputErrorStyle : InputValidStyle} id="email" name="email" placeholder="E-mail" />
                            <Field className={errors.phone && touched.phone ? InputErrorStyle : InputValidStyle} id="phone" name="phone" placeholder="Whatsapp" />
                        </div>
                        <div className='grid grid-flow-col justify-stretch gap-8'>
                            <Field className={errors.car && touched.car ? InputErrorStyle : InputValidStyle} id="car" name="car" placeholder="Carro" />
                            <Field className={errors.year && touched.year ? InputErrorStyle : InputValidStyle} id="year" name="year" placeholder="Ano" />
                            <Field className={errors.fipe && touched.fipe ? InputErrorStyle : InputValidStyle} id="fipe" name="fipe" placeholder="Fipe" />
                        </div>
                        <Field className={errors.mileage && touched.mileage ? InputErrorStyle : InputValidStyle} id="mileage" name="mileage" placeholder="Kilometragem" />
                        <Field className={errors.entry && touched.entry ? InputErrorStyle : InputValidStyle} id="entry" name="entry" placeholder="$ Entrada" />
                        <Field className={errors.installment && touched.installment ? InputErrorStyle : InputValidStyle} id="installment" name="installment" placeholder="Valor da Parcela" />
                        <Field className={errors.paid && touched.paid ? InputErrorStyle : InputValidStyle} id="paid" name="paid" placeholder="Quantidade Paga?" />
                        <Field className={errors?.times && touched?.times ? InputErrorStyle : InputValidStyle} id="times" name="times" placeholder="Quantas Vezes?" />
                        <div className='flex flex-row justify-between my-6'>
                            <Field className='rounded-[50px] bg-black text-white font-mono text-lg bg-opacity-30 placeholder-gray-600 px-10 py-3' id="attendant" name="attendant" as="select">
                                {allAttendant.map((column: string) => (
                                    <option className='' key={column} value={column}>
                                        {column}
                                    </option>
                                ))}
                            </Field>
                            <button className='rounded-[50px] text-xl py-3 text-white text-center font-semibold w-52 bg-sky-500 hover:bg-sky-700' type="submit">Cadastrar</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Register;