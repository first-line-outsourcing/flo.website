import axios from 'axios';

export class APIError extends Error {
  constructor(message, status, details) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

export class ContentTooLargeAPIError extends APIError {
  constructor() {
    super('Content too large', 413);
  }
}

export class InputValidationAPIError extends APIError {
  constructor(details) {
    super('Validation error', 400, details);
  }
}

export class API {
  constructor() {
    this.client = axios.create({
      baseURL: `${process.env.GATSBY_API_BASE}/api`,
    });
  }

  async sendProjectDescription(data, attachment) {
    const form = new FormData();
    form.append('data', JSON.stringify(data));
    if (attachment) {
      form.append('file', attachment, attachment.name);
    }
    try {
      const result = await this.client.post('/send-project-description', form);
    } catch (error) {
      this.processError(error);
    }
  }

  async sendResume(data, attachment) {
    const form = new FormData();
    form.append('data', JSON.stringify(data));
    if (attachment) {
      form.append('file', attachment, attachment.name);
    }
    try {
      const result = await this.client.post('/send-resume', form);
    } catch (error) {
      this.processError(error);
    }
  }

  processError(error) {
    if (error.response) {
      if (error.response.status === 400) {
        throw new InputValidationAPIError(error.response.data.details);
      } else if (error.response.status === 413) {
        throw new ContentTooLargeAPIError();
      }
      throw new APIError(error.response.data.message, error.response.status, error.response.data.details);
    }
    throw new APIError('Unknown error');
  }
}
