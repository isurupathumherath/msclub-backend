/*
 * Created on Sat Feb 12 2022
 *
 * The GNU General Public License v3.0
 * Copyright (c) 2022 MS Club SLIIT Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program at
 *
 *     https://www.gnu.org/licenses/
 *
 * This program is distributed in the hope that it will be useful
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 */

import { Request, Response, NextFunction } from "express";
import ApplicationService from "../services";

/**
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} - New application document
 */
export const addApplication = async (request: Request, response: Response, next: NextFunction) => {
	await ApplicationService.addApplication(request, request.body)
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error: any) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

/**
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} - Application document that relevent to the passed ID
 */
export const getApplicationById = async (request: Request, response: Response, next: NextFunction) => {
	const { applicationId } = request.params;
	if (applicationId) {
		await ApplicationService.fetchApplicationById(applicationId)
			.then((data) => {
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error: any) => {
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	} else {
		request.handleResponse.errorRespond(response)("applicationId not found");
	}
};

/**
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} - All application documents
 */
export const getApplications = async (request: Request, response: Response, next: NextFunction) => {
	await ApplicationService.fetchApplications()
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error: any) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

/**
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} - Updated application document
 */
export const setApplicationArchive = async (request: Request, response: Response, next: NextFunction) => {
	const { applicationId } = request.params;
	if (applicationId) {
		await ApplicationService.archiveApplication(applicationId)
			.then((data) => {
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error: any) => {
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	} else {
		request.handleResponse.errorRespond(response)("applicationId not found");
	}
};

/**
 * @function changeApplicationStatusIntoInterview that calls
 * @function changeApplicationStatusIntoInterview in the ApplicationService
 *
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} updated application document in the system
 */
export const changeApplicationStatusIntoInterview = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const { applicationId } = request.params;
	if (applicationId) {
		await ApplicationService.changeApplicationStatusIntoInterview(request, applicationId, request.body)
			.then((data) => {
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error: any) => {
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	} else {
		request.handleResponse.errorRespond(response)("applicationId not found");
	}
};

/**
 * @function changeApplicationStatusIntoSelected that calls
 * @function changeApplicationStatusIntoSelected in the ApplicationService
 *
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} updated application document in the system
 */
export const changeApplicationStatusIntoSelected = async (request: Request, response: Response, next: NextFunction) => {
	const { applicationId } = request.params;
	if (applicationId) {
		await ApplicationService.changeApplicationStatusIntoSelected(request, applicationId)
			.then((data) => {
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error: any) => {
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	} else {
		request.handleResponse.errorRespond(response)("applicationId not found");
	}
};
/**
 * @todo implement a @function changeApplicationStatusIntoRejected that calls
 * @function changeApplicationStatusIntoRejected in the ApplicationService
 *
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} updated application document in the system
 */
export const changeApplicationStatusIntoRejected = async (request: Request, response: Response, next: NextFunction) => {
	const { applicationId } = request.params;
	if (applicationId) {
		await ApplicationService.changeApplicationStatusIntoRejected(applicationId)
			.then((data) => {
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error: any) => {
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	} else {
		request.handleResponse.errorRespond(response)("applicationId not found");
	}
};

/**
 * @function fetchPendingApplications that calls
 * @function fetchPendingApplications in the ApplicationService
 *
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} fetched pending applications
 */
export const fetchPendingApplications = async (request: Request, response: Response, next: NextFunction) => {
	await ApplicationService.fetchPendingApplications()
		.then((data: any) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error: any) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
/**
 * @function fetchSelectedApplications that calls
 * @function fetchSelectedApplications in the ApplicationService
 *
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} fetched selected applications
 */
export const fetchSelectedApplications = async (request: Request, response: Response, next: NextFunction) => {
	await ApplicationService.fetchSelectedApplications()
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error: any) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
/**
 * @function fetchInterviewApplications that calls
 * @function fetchInterviewApplications in the ApplicationService
 *
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} fetched interview applications
 */
export const fetchInterviewApplications = async (request: Request, response: Response, next: NextFunction) => {
	await ApplicationService.fetchInterviewApplications()
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error: any) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

/**
 * @function fetchRejectedApplications that calls
 * @function fetchRejectedApplications in the ApplicationService
 *
 * @param {Request} request - Request from the frontend
 * @param {Response} response - Response that need to send to the client
 * @param {NextFunction} next - Next function
 * @returns {IApplication} fetched rejected applications
 */

export const fetchRejectedApplications = async (request: Request, response: Response, next: NextFunction) => {
	await ApplicationService.fetchRejectedApplications()
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error: any) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const getDeletedApplicationsForAdmin = async (request: Request, response: Response, next: NextFunction) => {
	await ApplicationService.getDeletedApplicationsForAdmin()
		.then((data: any) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error: any) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

/**
 * recoverRemovedApplication
 */
export const recoverRemovedApplication = async (request: Request, response: Response, next: NextFunction) => {
	const id = request.params.applicationId;
	await ApplicationService.recoverDeletedApplication(id)
		.then((data: any) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error: any) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
